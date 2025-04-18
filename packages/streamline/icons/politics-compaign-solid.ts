import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePoliticsCompaignSolidIcon],svg[streamline-politics-compaign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.537 3.957l.04.059a5.43 5.43 0 0 1 .873 3.356a5.43 5.43 0 0 1-.913 2.671H2.463A5.44 5.44 0 0 1 1.538 7c0-1.127.34-2.173.925-3.043zM7 .037c-2.11 0-4 .938-5.276 2.42H1.71l-.204.264A6.93 6.93 0 0 0 .07 7.672a6.9 6.9 0 0 0 1.416 3.58l.225.291h.013A6.95 6.95 0 0 0 7 13.963c2.11 0 4-.938 5.276-2.42h.013l.225-.292l.115-.153A6.93 6.93 0 0 0 13.963 7a6.93 6.93 0 0 0-1.475-4.285l-.2-.258h-.012A6.95 6.95 0 0 0 7 .037M3.949 5.855a.5.5 0 1 0-1 0v.369l-.405-.135a.5.5 0 1 0-.316.948l.441.148l-.345.517a.5.5 0 1 0 .832.555l.293-.438l.292.438a.5.5 0 1 0 .832-.555l-.345-.517l.441-.148a.5.5 0 1 0-.316-.948l-.404.135zm3.012-.5a.5.5 0 0 1 .5.5v.369l.404-.135a.5.5 0 1 1 .316.948l-.441.148l.345.517a.5.5 0 0 1-.832.555L6.96 7.82l-.293.438a.5.5 0 1 1-.832-.555l.345-.517l-.441-.148a.5.5 0 1 1 .316-.948l.405.135v-.37a.5.5 0 0 1 .5-.5Zm4.011.5a.5.5 0 0 0-1 0v.369l-.404-.135a.5.5 0 1 0-.316.948l.441.148l-.345.517a.5.5 0 0 0 .832.555l.293-.438l.292.438a.5.5 0 0 0 .832-.555l-.345-.517l.441-.148a.5.5 0 0 0-.316-.948l-.405.135z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePoliticsCompaignSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
