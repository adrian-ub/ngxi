import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faCalendarPlusOIcon],svg[fa-calendar-plus-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 256q52 0 90 38t38 90v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h128v-96q0-66 47-113T416 0h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96zm-384-96v288q0 14 9 23t23 9h64q14 0 23-9t9-23V160q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23m-768 0v288q0 14 9 23t23 9h64q14 0 23-9t9-23V160q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23m1152 1504V640H128v1024zm-640-576h224q14 0 23 9t9 23v64q0 14-9 23t-23 9H896v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224H544q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224V864q0-14 9-23t23-9h64q14 0 23 9t9 23z"></svg:path>`,
})
export class FaCalendarPlusOIcon {
  readonly viewBox = input("0 0 1664 1792")
  readonly width = input("0.93em")
  readonly height = input("1em")
}
