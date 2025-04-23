import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideServerCogIcon],svg[lucide-server-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m10.852 14.772l-.383.923m2.679-.923a3 3 0 1 0-2.296-5.544l-.383-.923m2.679.923l.383-.923"></svg:path><svg:path d="m13.53 15.696l-.382-.924a3 3 0 1 1-2.296-5.544m3.92 1.624l.923-.383m-.923 2.679l.923.383"></svg:path><svg:path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5m-15 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5M6 18h.01M6 6h.01m3.218 4.852l-.923-.383m.923 2.679l-.923.383"></svg:path></svg:g>`,
})
export class LucideServerCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
