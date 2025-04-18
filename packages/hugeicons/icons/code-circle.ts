import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCodeCircleIcon],svg[hugeicons-code-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 16c.616 0 1.116-.512 1.116-1.143v-1.24c0-.304.117-.595.326-.809l.395-.404a.58.58 0 0 0 0-.808l-.395-.404a1.16 1.16 0 0 1-.326-.808V9.143C17.116 8.512 16.616 8 16 8m-8 8c-.616 0-1.116-.512-1.116-1.143v-1.24c0-.304-.117-.595-.326-.809l-.395-.404a.58.58 0 0 1 0-.808l.395-.404c.209-.214.326-.505.326-.808V9.143C6.884 8.512 7.384 8 8 8m2 4h.009m3.982 0H14"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class HugeiconsCodeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
