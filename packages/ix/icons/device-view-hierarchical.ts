import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDeviceViewHierarchicalIcon],svg[ix-device-view-hierarchical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 341.333V448H256V341.333zM405.333 384H298.667v21.333h106.666zm-256-192h21.334v42.667h64V256h-64v128h64v21.333h-85.334zM448 192v106.667H256V192zm-42.667 42.667H298.667V256h106.666zM256 64v106.667H64V64zm-42.667 42.667H106.667V128h106.666z"></svg:path>`,
})
export class IxDeviceViewHierarchicalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
