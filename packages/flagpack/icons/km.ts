import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackKmIcon],svg[flagpack-km-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#5196ED" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackKm0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackKm0)"><svg:path fill="#AF0100" d="M0 12v6h32v-6z"></svg:path><svg:path fill="#F7FCFF" d="M0 6v6h32V6z"></svg:path><svg:path fill="#FECA00" d="M0 0v6h32V0z"></svg:path><svg:path fill="#5EAA22" d="m0 0l19 12L0 24z"></svg:path><svg:path fill="#F7FCFF" d="M7.305 16.501S3.72 15.278 3.848 11.45s3.775-4.58 3.775-4.58c-1.277-.923-5.85.159-5.996 4.58c-.146 4.42 4.315 5.402 5.678 5.051m.107-6.692l.112-.654l-.475-.464l.657-.096L8 8l.294.595l.657.096l-.475.464l.112.654L8 9.5zm.112 1.346l-.112.654L8 11.5l.588.309l-.112-.654l.475-.464l-.657-.096L8 10l-.294.595l-.657.096zm-.112 2.654l.112-.654l-.475-.464l.657-.096L8 12l.294.595l.657.096l-.475.463l.112.655L8 13.5zm0 2l.112-.654l-.475-.464l.657-.096L8 14l.294.595l.657.096l-.475.463l.112.655L8 15.5z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackKmIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
