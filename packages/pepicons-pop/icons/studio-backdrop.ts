import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopStudioBackdropIcon],svg[pepicons-pop-studio-backdrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3 3a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 17 3v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 10zm2 .5v6h10v-6z"></svg:path><svg:path d="M1.75 2.5a1 1 0 0 1 1-1h14.5a1 1 0 1 1 0 2H2.75a1 1 0 0 1-1-1m1.97 14l1.26-6.304l-1.96-.392l-1.381 6.902a1.5 1.5 0 0 0 1.47 1.794H16.89a1.5 1.5 0 0 0 1.471-1.794l-1.38-6.902l-1.962.392L16.28 16.5z"></svg:path></svg:g>`,
})
export class PepiconsPopStudioBackdropIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
