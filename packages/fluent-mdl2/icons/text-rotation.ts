import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TextRotationIcon],svg[fluent-mdl2-text-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1332 640l-48 128h-103l240-640h102l240 640h-103l-48-128zm140-375l-92 247h184zm227 1242l90 90l-317 317l-317-317l90-90l163 163V896h128v774zM640 1670l163-163l90 90l-317 317l-317-317l90-90l163 163V128h128z"></svg:path>`,
})
export class FluentMdl2TextRotationIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
