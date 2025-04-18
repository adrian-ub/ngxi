import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrendyolIcon],svg[arcticons-trendyol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.827 24.526v2.183c0 .893-.724 1.617-1.617 1.617h0c-.447 0-.851-.18-1.144-.474"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.827 21.857v2.669c0 .893-.724 1.617-1.617 1.617h0a1.617 1.617 0 0 1-1.618-1.617v-2.669"></svg:path><svg:rect width="3.235" height="4.286" x="34.592" y="21.857" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.617" ry="1.617"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.063 23.474c0-.893.724-1.617 1.617-1.617h0m-1.617 0v4.286M39.5 19.674v6.469m-30.15-5.62v4.811c0 .447.361.809.808.809h.242m-1.9-4.286h1.698m12.818 4.286v-2.669c0-.893-.724-1.617-1.618-1.617h0c-.893 0-1.617.724-1.617 1.617m0 2.669v-4.286m-1.921 3.47a1.62 1.62 0 0 1-1.404.816h0a1.617 1.617 0 0 1-1.618-1.617v-1.052c0-.893.724-1.617 1.618-1.617h0c.893 0 1.617.724 1.617 1.617V24h-3.235m13.098-.526c0-.893-.724-1.617-1.617-1.617h0c-.894 0-1.618.724-1.618 1.617v1.052c0 .893.724 1.617 1.617 1.617h0c.894 0 1.618-.724 1.618-1.617m0 1.617v-6.469M42.5 34h-37m37-20h-37"></svg:path>`,
})
export class ArcticonsTrendyolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
