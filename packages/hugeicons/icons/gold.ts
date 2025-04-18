import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGoldIcon],svg[hugeicons-gold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.265 18.372c.316-.965.474-1.447.797-1.779q.231-.238.527-.386C16 16 16.5 16 17.5 16s1.5 0 1.912.207q.294.148.527.386c.323.332.48.814.797 1.779l.326.995c.394 1.202.591 1.802.297 2.218c-.295.415-.917.415-2.162.415h-3.393c-1.245 0-1.868 0-2.162-.415c-.295-.416-.098-1.016.296-2.218zm-5.501-8c.316-.965.475-1.447.797-1.779q.233-.238.527-.386C10.5 8 11 8 12 8s1.5 0 1.912.207q.294.148.527.386c.322.332.48.814.797 1.779l.326.995c.394 1.202.59 1.802.297 2.218c-.295.415-.917.415-2.163.415h-3.392c-1.246 0-1.868 0-2.162-.415c-.295-.416-.098-1.016.296-2.218zm-5.5 8c.317-.965.475-1.447.798-1.779q.231-.238.527-.386C5 16 5.5 16 6.5 16s1.5 0 1.912.207q.294.148.527.386c.323.332.48.814.797 1.779l.326.995c.394 1.202.591 1.802.297 2.218c-.295.415-.917.415-2.162.415H4.804c-1.245 0-1.868 0-2.162-.415c-.295-.416-.098-1.016.296-2.218zM12 2v2m-4.5-.5L9 5m7.5-1.5L15 5" color="currentColor"></svg:path>`,
})
export class HugeiconsGoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
