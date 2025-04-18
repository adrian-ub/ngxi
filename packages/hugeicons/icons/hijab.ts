import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHijabIcon],svg[hugeicons-hijab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 5a3 3 0 0 0-3 3v2a3 3 0 1 0 6 0V8a3 3 0 0 0-3-3"></svg:path><svg:path d="M15 10c0 2.5-.32 4.4-3.733 6S7 19.833 7 21M9 8h6"></svg:path><svg:path d="M17.802 7.519C17.802 4.47 15.205 2 12 2S6.198 4.47 6.198 7.519c0 2.098-.738 5.95-3.14 8.916c-.747.923-1.12 1.384-1.05 1.809c.072.425.472.685 1.272 1.205c5.236 3.401 12.204 3.401 17.44 0c.8-.52 1.2-.78 1.271-1.205c.072-.425-.302-.886-1.05-1.81c-2.4-2.965-3.139-6.817-3.139-8.915"></svg:path></svg:g>`,
})
export class HugeiconsHijabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
