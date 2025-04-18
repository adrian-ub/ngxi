import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OrientationIcon],svg[fluent-mdl2-orientation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 1664H0V768h1408zm-128-768H128v640h1152zM128 640H0V512h128zm0-256H0V256h128zm0-256H0V0h128zm768 0H768V0h128zm-512 0H256V0h128zm256 0H512V0h128zm256 256H768V256h128zm0 256H768V512h128zm731-512q102 102 180 197t132 200t81 226t28 273q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37v-128q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-133-25-242t-74-204t-120-182t-165-177v293h-128V0h512v128z"></svg:path>`,
})
export class FluentMdl2OrientationIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
