import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCubeQuick20FilledIcon],svg[fluent-cube-quick-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.815 4.668a1.5 1.5 0 0 1 1.37 0l3 1.54c.5.257.815.772.815 1.335v3.915a1.5 1.5 0 0 1-.815 1.334l-3 1.54a1.5 1.5 0 0 1-1.37 0l-3-1.54A1.5 1.5 0 0 1 9 11.458V7.543a1.5 1.5 0 0 1 .815-1.335zm-1.762 3.109a.5.5 0 0 0 .223.67L13 9.31v2.19a.5.5 0 0 0 1 0V9.31l1.724-.862a.5.5 0 1 0-.447-.895l-1.777.889l-1.776-.889a.5.5 0 0 0-.671.224M3.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm-1 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm1 3a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentCubeQuick20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
