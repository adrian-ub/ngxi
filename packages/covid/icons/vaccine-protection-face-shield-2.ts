import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidVaccineProtectionFaceShield2Icon],svg[covid-vaccine-protection-face-shield-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.167 17.107V15.06H19.7a1.02 1.02 0 0 0 .935-1.435c-1-2.239-2.476-4.994-2.476-4.994V6.45a2 2 0 0 0-.18-.847c-1.111-2.409-2.617-4.074-5.5-4.652C6.611-.224.807 3.887.763 9.871a9.2 9.2 0 0 0 3.071 6.937v6.442m10.238 0v-1.34M.777 9.433h10.418"></svg:path><svg:path d="M11.2 4.628h8.042a4 4 0 0 1 4 4v11.577H18.2a7 7 0 0 1-7-7zm-.005 0H2.528"></svg:path></svg:g>`,
})
export class CovidVaccineProtectionFaceShield2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
