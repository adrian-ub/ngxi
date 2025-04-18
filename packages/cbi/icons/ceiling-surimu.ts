import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiCeilingSurimuIcon],svg[cbi-ceiling-surimu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.61 8.38a.64.64 0 0 0-.5-.24h-2.77v-.06l-.32-1a.62.62 0 0 0-.6-.44H5.58c-.27 0-.51.17-.59.43l-.32 1c-.01.02 0 .04-.01.07H1.89c-.19 0-.38.09-.5.24s-.15.35-.1.54l2.15 7.98c.07.27.32.46.6.46H20c.28 0 .53-.19.6-.47l2.11-7.98c.05-.18.01-.38-.1-.53m-3.09 7.74h-15L2.71 9.38H21.3z"></svg:path>`,
})
export class CbiCeilingSurimuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
