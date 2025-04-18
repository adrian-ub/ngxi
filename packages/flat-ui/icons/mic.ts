import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiMicIcon],svg[flat-ui-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EBF0F1" d="M49.985 0c27.619 0 50.009 22.39 50.009 50.009s-22.391 49.993-50.009 49.993S.007 77.628.007 50.009S22.366 0 49.985 0"></svg:path><svg:defs><svg:path id="flatUiMic0" d="M49.985 0c27.619 0 50.009 22.39 50.009 50.009s-22.391 49.993-50.009 49.993S.007 77.628.007 50.009S22.366 0 49.985 0"></svg:path><svg:path id="flatUiMic1" d="M50.009 9.007c9.94 0 18 8.059 18 18v34c0 9.941-8.06 18-18 18c-9.941 0-18-8.059-18-18v-34c0-9.941 8.059-18 18-18"></svg:path></svg:defs><svg:clippath id="flatUiMic2"><svg:use href="#flatUiMic0"></svg:use></svg:clippath><svg:g clip-path="url(#flatUiMic2)"><svg:path fill="#1C3C50" d="M27.966 60.007h44.059v-4H28.001z"></svg:path><svg:path fill="#23475F" d="M78.009 60.796v-7.062c0-1.508-1.526-2.729-3.022-2.729s-2.959 1.224-2.959 2.729v7.062c0 12.544-9.567 22.249-22.019 22.249S27.96 73.34 27.96 60.796l.062-7.062c0-1.508-1.557-2.729-3.054-2.729s-2.96 1.224-2.96 2.729v7.062c0 14.188 10.454 25.96 24.009 27.917v11.303H32.912v.016c-2.172.007-3.931 1.854-3.931 3.979s1.76 4.014 3.931 4.02h34.154v-.004c2.164-.017 3.912-1.897 3.912-4.018c0-2.117-1.748-3.959-3.912-3.976v-.019H54.003V88.713c13.554-1.959 24.006-13.729 24.006-27.917"></svg:path><svg:path fill="#BCC4C8" d="M50.009 9.007c9.94 0 18 8.059 18 18v34c0 9.941-8.06 18-18 18c-9.941 0-18-8.059-18-18v-34c0-9.941 8.059-18 18-18"></svg:path><svg:path fill="#1C3C50" d="M68.004 57.007v4H32.035v-3.999l-.026-.001v4c0 9.941 8.059 18 18 18c9.94 0 18-8.059 18-18v-4z"></svg:path><svg:path fill="#DF3627" d="M32.035 55.007h35.969v6H32.035z"></svg:path><svg:path fill="#A9B0B4" d="M32.009 27.007v34c0 9.941 8.059 18 18 18v-70c-9.941 0-18 8.059-18 18"></svg:path><svg:path fill="#C83021" d="M32.035 55.007h17.974v6H32.035z"></svg:path><svg:path fill="#193648" d="M32.035 61.007v-3.999l-.026-.001v4c0 9.941 8.059 18 18 18v-18z"></svg:path><svg:defs><svg:use href="#flatUiMic1" id="flatUiMic3"></svg:use></svg:defs><svg:defs><svg:use href="#flatUiMic1" id="flatUiMic4"></svg:use></svg:defs><svg:clippath id="flatUiMic5"><svg:use href="#flatUiMic3"></svg:use></svg:clippath><svg:clippath id="flatUiMic6" clip-path="url(#flatUiMic5)"><svg:use href="#flatUiMic4"></svg:use></svg:clippath><svg:path fill="#7A8D8E" d="M78.009 44.007h-20a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6m0-9h-20a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6m0-9h-20a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6m-20-3h20a3 3 0 1 0 0-6h-20a3 3 0 0 0 0 6" clip-path="url(#flatUiMic6)"></svg:path><svg:path fill="#1C3C50" d="M50.008 89.005a28 28 0 0 1-4-.292v2.295h8v-2.295a28 28 0 0 1-4 .292" clip-path="url(#flatUiMic6)"></svg:path><svg:path fill="#6E7F80" d="M42.009 44.007h-20a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6m0-9h-20a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6m0-9h-20a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6m-20-3h20a3 3 0 1 0 0-6h-20a3 3 0 0 0 0 6" clip-path="url(#flatUiMic6)"></svg:path></svg:g>`,
})
export class FlatUiMicIcon {
  readonly viewBox = input("0.007 0 99.987 100.002")
  readonly width = input("1em")
  readonly height = input("1em")
}
