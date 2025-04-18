import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2VersionControlPushIcon],svg[fluent-mdl2-version-control-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 0v128H256V0zm-640 603v554q83 11 153 50t122 99t80 135t29 159q0 93-35 174t-96 143t-142 96t-175 35q-93 0-174-35t-143-96t-96-142t-35-175q0-83 29-158t80-135t121-99t154-51V603L557 941l-90-90l493-493l493 493l-90 90zm256 997q0-66-25-124t-69-101t-102-69t-124-26t-124 25t-102 69t-69 102t-25 124t25 124t68 102t102 69t125 25t124-25t101-68t69-102t26-125"></svg:path>`,
})
export class FluentMdl2VersionControlPushIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
