import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiGlasspanelDoorOpenIcon],svg[cbi-glasspanel-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.344 14.334H3.605v5.516h6.739zm-.2 5.321H3.8V14.53h6.346zM11.046 2v.729H2.173V22h19.654V2Zm-.5 18.048H3.409v-5.91h7.132zm0-6.873H3.409V3.958h7.132zM21.1 21.269h-9.325c.007-6.423 0-12.117 0-18.54H21.1ZM10.344 4.155H3.605v8.824h6.739zm-.2 8.59H3.8V4.351h6.346z"></svg:path>`,
})
export class CbiGlasspanelDoorOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
