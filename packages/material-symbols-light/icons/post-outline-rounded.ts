import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPostOutlineRoundedIcon],svg[material-symbols-light-post-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.385 20H5.615q-.666 0-1.14-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v12.77q0 .666-.475 1.14t-1.14.475m-.154-3.346H5.769v1.807h12.462zm-12.462-.885h12.462v-1.808H5.769zm0-2.923h12.462V5.77H5.769zm0 3.808v1.807zm0-.885v-1.808zm0-2.923V5.77zm0 1.115v-1.115zm0 2.693v-.885z"></svg:path>`,
})
export class MaterialSymbolsLightPostOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
