import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBambooShootIcon],svg[tdesign-bamboo-shoot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.843 4.228l-.211.037a21 21 0 0 0-3.178.866l.53 2.621c.09.45.173.854.238 1.173l1.167.117c.74-1.766 1.136-3.216 1.347-4.244q.064-.312.107-.57M17.5 10.963l-1.24-.124l-7.036-1.13l1.796 10.362c3.124-3.37 5.157-6.49 6.48-9.108M9.029 20.29L7.291 10.265a47 47 0 0 0-4.19 3.64a18 18 0 0 0 3.028 4.037a18.4 18.4 0 0 0 2.9 2.348m1.666-12.37l4.427.71l-.097-.48l-.46-2.268a32.5 32.5 0 0 0-3.87 2.037m11.3-5.844l-.018 1.087l-.005.116a9 9 0 0 1-.036.414c-.037.355-.107.864-.24 1.508c-.265 1.287-.777 3.111-1.767 5.318c-1.532 3.412-4.202 7.726-8.85 12.373l-.478.479l-.623-.267c-.933-.4-3.187-1.672-5.263-3.748C2.64 17.28 1.368 15.026.968 14.092l-.268-.62l.479-.479C3.352 10.82 5.452 9.08 7.422 7.685c2.839-2.01 5.403-3.298 7.52-4.124c1.81-.706 3.29-1.072 4.33-1.263c.52-.095.93-.145 1.216-.173a8 8 0 0 1 .43-.03z"></svg:path>`,
})
export class TdesignBambooShootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
