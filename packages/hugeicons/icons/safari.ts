import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSafariIcon],svg[hugeicons-safari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.721 13.721c.383-.383.602-.893 1.04-1.914l1.556-3.632c.157-.365.235-.547.145-.637s-.272-.012-.637.145l-3.632 1.556c-1.021.438-1.531.657-1.914 1.04m3.442 3.442c-.383.383-.893.602-1.914 1.04l-3.632 1.556c-.365.157-.547.235-.637.145s-.012-.272.145-.637l1.556-3.632c.438-1.021.657-1.531 1.04-1.914m3.442 3.442L10.28 10.28"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 2v1.5M12 22v-1.5M22 12h-1.5M2 12h1.5"></svg:path></svg:g>`,
})
export class HugeiconsSafariIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
