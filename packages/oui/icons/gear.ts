import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiGearIcon],svg[oui-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.164 10.329L1.87 8L.163 5.67c.18-.601.43-1.19.758-1.757a8.2 8.2 0 0 1 1.142-1.535l2.872.313L6.099.05a8.2 8.2 0 0 1 3.8-.003l1.166 2.644l2.872-.313a8.2 8.2 0 0 1 1.899 3.293L14.13 8l1.706 2.33c-.18.601-.43 1.19-.758 1.757a8.2 8.2 0 0 1-1.142 1.535l-2.872-.313L9.9 15.95a8.2 8.2 0 0 1-3.8.003l-1.166-2.644l-2.872.313a8.2 8.2 0 0 1-1.899-3.293m4.663 1.986a1 1 0 0 1 1.023.591l.957 2.17c.79.134 1.597.132 2.387-.001l.956-2.169a1 1 0 0 1 1.023-.59l2.358.256a7.2 7.2 0 0 0 1.194-2.068l-1.401-1.913a1 1 0 0 1 0-1.182l1.4-1.912a7.2 7.2 0 0 0-1.192-2.069l-2.359.257a1 1 0 0 1-1.023-.591L9.193.924a7.2 7.2 0 0 0-2.387.001L5.85 3.094a1 1 0 0 1-1.023.59l-2.358-.256a7.2 7.2 0 0 0-1.194 2.068l1.401 1.913a1 1 0 0 1 0 1.182l-1.4 1.912c.28.751.681 1.45 1.192 2.069zM8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-1a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class OuiGearIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
