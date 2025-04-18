import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2InstallToDriveIcon],svg[fluent-mdl2-install-to-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1728 640q66 0 124 25t101 69t69 102t26 124v448h-128V960q0-40-15-75t-41-61t-61-41t-75-15H320q-40 0-75 15t-61 41t-41 61t-15 75v320h1408v128H0V960q0-66 25-124t68-101t102-69t125-26zm227 899l90 90l-317 317l-317-317l90-90l163 162v-549h128v549zm-163-515h-128V896h128zm-384-128h128v128h-128z"></svg:path>`,
})
export class FluentMdl2InstallToDriveIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
