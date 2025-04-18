import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OpenFolderHorizontalIcon],svg[fluent-mdl2-open-folder-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 768q26 0 49 10t41 27t28 41t10 49q0 30-14 58l-419 839H0V384q0-27 10-50t27-40t41-28t50-10h352q45 0 77 9t58 24t46 31t40 31t44 23t55 10h736q27 0 50 10t40 27t28 41t10 50v256zM128 1457l309-618q17-33 47-52t68-19h984V512H800q-45 0-77-9t-58-24t-46-31t-40-31t-44-23t-55-10H128zm1792-561H552l-384 768h1368z"></svg:path>`,
})
export class FluentMdl2OpenFolderHorizontalIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
