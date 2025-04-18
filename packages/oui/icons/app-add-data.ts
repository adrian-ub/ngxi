import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppAddDataIcon],svg[oui-app-add-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 30H0V3h12.57l3 5H32zM2 28h28V10H14.43l-3-5H2z"></svg:path><svg:path d="M21 18h-4v-4h-2v4h-4v2h4v4h2v-4h4z" class="ouiIcon__fillSecondary"></svg:path></svg:g>`,
})
export class OuiAppAddDataIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
