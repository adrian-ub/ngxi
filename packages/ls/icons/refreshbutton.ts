import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsRefreshbuttonIcon],svg[ls-refreshbutton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M358 0c198 0 359 161 359 359S556 717 358 717S0 557 0 359S160 0 358 0M198 368h-69c0 60 23 120 67 165c90 89 235 89 325 0c89-90 89-236 0-325c-42-41-94-63-148-66V65L198 179l175 113v-82c37 3 71 18 99 46c63 62 63 166 0 228c-62 63-165 63-227 0c-33-31-48-74-47-116"></svg:path>`,
})
export class LsRefreshbuttonIcon {
  readonly viewBox = input("0 0 717 717")
  readonly width = input("1em")
  readonly height = input("1em")
}
