import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsFlameOutlineIcon],svg[famicons-flame-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 320c0-93 124-165 96-272c66 0 192 96 192 272a144 144 0 0 1-288 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 368c0 57.71-32 80-64 80s-64-22.29-64-80s40-86 32-128c42 0 96 70.29 96 128"></svg:path>`,
})
export class FamiconsFlameOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
