import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraFrontRoundedIcon],svg[material-symbols-light-camera-front-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.616q0-.691.463-1.153T7.616 3h8.769q.69 0 1.153.463T18 4.615v10.77q0 .67-.472 1.143q-.472.472-1.143.472h-3.293q-.242 0-.472-.096t-.391-.258l-.742-.742q-.46-.46-1.137-.46t-1.136.46l-.589.588q-.244.245-.526.354q-.282.11-.557.11q-.58 0-1.061-.431T6 15.402zm1 9.073q1.123-.518 2.472-.834q1.35-.316 2.528-.316t2.528.316t2.472.834V4.616q0-.231-.192-.424T16.384 4H7.616q-.231 0-.424.192T7 4.615zm5-2.727q-1.038 0-1.77-.731T9.5 8.46t.73-1.769t1.77-.73t1.77.73t.73 1.77t-.73 1.769t-1.77.73m-.758 8.539H6.5q-.213 0-.357-.143T6 19t.143-.357t.357-.143h4.742l-1.246-1.246q-.14-.14-.15-.345q-.01-.203.15-.363t.354-.16t.354.16l1.888 1.889q.242.242.242.565t-.242.566l-1.888 1.888q-.14.14-.345.15q-.203.01-.363-.15t-.16-.354t.16-.354zm3.258 0q-.213 0-.357-.143T14 19t.143-.357t.357-.143h3q.214 0 .357.143T18 19t-.143.357t-.357.143z"></svg:path>`,
})
export class MaterialSymbolsLightCameraFrontRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
