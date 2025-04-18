import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMessageMultiple02Icon],svg[hugeicons-message-multiple-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.791 19c-.326-.132-.507-.196-.607-.183c-.124.015-.304.147-.664.41c-.634.466-1.432.8-2.617.771c-.599-.014-.898-.021-1.032-.249c-.134-.227.033-.542.367-1.172c.463-.874.756-1.874.312-2.675c-.766-1.144-1.417-2.5-1.512-3.963a19 19 0 0 1 0-2.388c.261-4.019 3.433-7.22 7.415-7.484c1.356-.09 2.774-.09 4.132 0c3.965.263 7.127 3.438 7.412 7.433"></svg:path><svg:path d="M14.698 21.647c-2.51-.16-4.51-2.117-4.674-4.573a11 11 0 0 1 0-1.46c.165-2.456 2.164-4.412 4.674-4.573c.856-.055 1.75-.055 2.604 0c2.51.161 4.51 2.117 4.674 4.574c.032.48.032.978 0 1.459c-.06.894-.47 1.723-.953 2.422c-.28.49-.095 1.1.197 1.634c.21.385.316.578.231.717s-.273.143-.65.152c-.747.018-1.25-.187-1.65-.471c-.227-.161-.34-.242-.418-.251s-.232.052-.54.174a3 3 0 0 1-.89.196a21 21 0 0 1-2.605 0"></svg:path></svg:g>`,
})
export class HugeiconsMessageMultiple02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
