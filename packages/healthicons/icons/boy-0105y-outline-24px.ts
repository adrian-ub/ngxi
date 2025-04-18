import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBoy0105yOutline24pxIcon],svg[healthicons-boy-0105y-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 8.5A2.25 2.25 0 1 0 12 4a2.25 2.25 0 0 0 0 4.5"></svg:path><svg:path d="M7.447 8.606a1 1 0 1 0-.894 1.788c.453.227 1.317.551 2.447.79V18.9a1.099 1.099 0 0 0 2.177.215L12 15l.823 4.116A1.099 1.099 0 0 0 15 18.902v-7.717c1.13-.239 1.994-.563 2.447-.79a1 1 0 1 0-.894-1.788c-.533.266-2.314.894-4.553.894c-2.24 0-4.02-.628-4.553-.894"></svg:path></svg:g>`,
})
export class HealthiconsBoy0105yOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
