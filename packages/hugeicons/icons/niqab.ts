import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNiqabIcon],svg[hugeicons-niqab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 5c-1.657 0-3 1.331-3 2.973v6.938c0 1.13.005 2.318 1.235 2.823c.865.355 2.665.355 3.53 0C14.995 17.229 15 16.04 15 14.91V7.973C15 6.331 13.657 5 12 5"></svg:path><svg:path d="M17.802 7.519C17.802 4.47 15.205 2 12 2S6.198 4.47 6.198 7.519c0 2.098-.738 5.95-3.14 8.916c-.747.923-1.12 1.384-1.05 1.809c.072.425.472.685 1.272 1.205c5.236 3.401 12.204 3.401 17.44 0c.8-.52 1.2-.78 1.271-1.205c.072-.425-.302-.886-1.05-1.81c-2.4-2.965-3.139-6.817-3.139-8.915M9 8h6m-6 3h6"></svg:path></svg:g>`,
})
export class HugeiconsNiqabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
