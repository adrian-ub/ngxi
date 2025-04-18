import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGolfFilledIcon],svg[tabler-golf-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 3a1 1 0 0 1 1.496-.868l7 4a1 1 0 0 1 0 1.736L13 11.58V18a1 1 0 0 1-.883.993L12 19a1 1 0 0 1-1-1z"></svg:path><svg:path d="M14.135 17.168a1 1 0 0 1 1.367-.363C16.418 17.337 17 18.096 17 19c0 1.84-2.319 3-5 3s-5-1.16-5-3c0-.911.577-1.66 1.498-2.195a1 1 0 1 1 1.004 1.73c-.365.212-.502.39-.502.465c0 .086.179.296.622.518c.6.3 1.456.482 2.378.482s1.777-.182 2.378-.482c.443-.222.622-.432.622-.518c0-.07-.142-.256-.502-.465a1 1 0 0 1-.363-1.367"></svg:path></svg:g>`,
})
export class TablerGolfFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
