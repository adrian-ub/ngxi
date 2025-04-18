import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OpenWithIcon],svg[fluent-mdl2-open-with-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2045 1219l-317-317l-317 317l90 90l162-163v583h129v-583l163 163zm-253-834H639V256h1153zm-256 1280H639v-129h897zM384 512H0V128h384zM128 384h128V256H128zm256 768H0V768h384zm-256-128h128V896H128zm256 768H0v-384h384zm-256-128h128v-128H128zm1280-640H640V896h896z"></svg:path>`,
})
export class FluentMdl2OpenWithIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
