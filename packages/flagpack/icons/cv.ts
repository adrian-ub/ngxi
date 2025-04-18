import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackCvIcon],svg[flagpack-cv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#flagpackCv1)"><svg:path fill="#4141DB" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackCv0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackCv0)"><svg:path fill="#F90000" stroke="#F7FCFF" stroke-width="2" d="M0 13h-1v4h34v-4z"></svg:path><svg:g filter="url(#flagpackCv2)"><svg:path fill="#FFDE00" fill-rule="evenodd" d="m9.796 10.26l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.283.74h-.842l.645.574zm3 1.6l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.283.74h-.842l.645.574zm3.126 1.89l-.726.51l.245-.906l-.645-.574h.842l.283-.74l.33.74h.719l-.564.574l.218.906zm-.726 4.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.283.74h-.842l.645.574zm-1.674 1.89l-.726.51l.245-.906l-.645-.574h.842l.283-.74l.33.74h.719l-.564.574l.218.906zm-3.726 2.11l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.283.74h-.842l.645.574zm-2.274-2.11l-.726.51l.245-.906l-.645-.574h.842l.283-.74l.33.74h.719l-.564.574l.218.906zm-3.126-1.89l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.283.74h-.842l.645.574zm.726-4.51l-.726.51l.245-.906l-.645-.574h.842l.283-.74l.33.74h.719l-.564.574l.218.906zm1.674-1.89l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.283.74h-.842l.645.574z" clip-rule="evenodd"></svg:path></svg:g></svg:g></svg:g><svg:defs><svg:clippath id="flagpackCv1"><svg:path fill="#fff" d="M0 0h32v24H0z"></svg:path></svg:clippath><svg:filter id="flagpackCv2" width="20.974" height="22.219" x="-.004" y="4.041" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset></svg:feoffset><svg:fegaussianblur stdDeviation="2"></svg:fegaussianblur><svg:fecolormatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"></svg:fecolormatrix><svg:feblend in2="BackgroundImageFix" result="effect1_dropShadow_270_67487"></svg:feblend><svg:feblend in="SourceGraphic" in2="effect1_dropShadow_270_67487" result="shape"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FlagpackCvIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
