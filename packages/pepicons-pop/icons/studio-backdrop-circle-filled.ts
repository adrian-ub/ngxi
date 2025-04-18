import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopStudioBackdropCircleFilledIcon],svg[pepicons-pop-studio-backdrop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopStudioBackdropCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6 6a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 20 6v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 6 13zm2 .5v6h10v-6z"></svg:path><svg:path d="M4.75 5.5a1 1 0 0 1 1-1h14.5a1 1 0 1 1 0 2H5.75a1 1 0 0 1-1-1m1.97 14l1.26-6.304l-1.96-.392l-1.381 6.902a1.5 1.5 0 0 0 1.47 1.794H19.89a1.5 1.5 0 0 0 1.471-1.794l-1.38-6.902l-1.962.392L19.28 19.5z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopStudioBackdropCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopStudioBackdropCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
