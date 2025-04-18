import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotonePauseCircleIcon],svg[ic-twotone-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m-1 12H9V8h2zm4 0h-2V8h2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M13 8h2v8h-2zM9 8h2v8H9z"></svg:path><svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"></svg:path>`,
})
export class IcTwotonePauseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
