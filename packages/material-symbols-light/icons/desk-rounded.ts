import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeskRoundedIcon],svg[material-symbols-light-desk-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.077 17V8.692q0-.666.475-1.14t1.14-.475h14.616q.666 0 1.14.474t.475 1.141V17q0 .213-.144.356q-.144.144-.356.144q-.213 0-.357-.144T19.923 17v-1.5h-4.711V17q0 .213-.144.356q-.144.144-.357.144t-.356-.144t-.143-.356V8.077h-9.52q-.269 0-.442.173t-.173.442V17q0 .213-.144.356t-.357.144t-.356-.144T3.077 17m12.135-6.5h4.711V8.692q0-.269-.173-.442t-.442-.173h-4.096zm0 4h4.711v-3h-4.711z"></svg:path>`,
})
export class MaterialSymbolsLightDeskRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
