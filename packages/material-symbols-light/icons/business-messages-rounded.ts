import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBusinessMessagesRoundedIcon],svg[material-symbols-light-business-messages-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.942 19q-.728 0-1.22-.462q-.491-.463-.491-1.153V8.846L3.106 6.323Q3 6.193 2.96 6.068q-.04-.124-.04-.26q0-.304.217-.556T3.727 5h15.562q.728 0 1.22.463q.491.462.491 1.153v10.769q0 .69-.491 1.153q-.492.462-1.22.462zm4.608-4.808h4.816q.213 0 .356-.143q.144-.143.144-.357t-.144-.356t-.357-.144h-5.96q-.366 0-.494.324q-.128.325.135.569l2.196 2.08q.14.14.344.14q.205 0 .345-.14q.16-.16.16-.373t-.16-.353zm2.9-4.384H9.616q-.214 0-.357.143t-.143.357t.143.357t.357.143h5.959q.367 0 .495-.324t-.135-.568l-2.177-2.081q-.14-.14-.344-.14t-.345.14q-.16.16-.16.373t.16.354z"></svg:path>`,
})
export class MaterialSymbolsLightBusinessMessagesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
