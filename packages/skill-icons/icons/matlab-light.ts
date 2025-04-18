import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsMatlabLightIcon],svg[skill-icons-matlab-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F4ED" rx="60"></svg:rect><svg:path fill="#49D" d="m33 133.187l53.797-21.735a140 140 0 0 1 18.36-19.912c4.455-2.363 12.825-1.08 28.148-20.115C148.155 52.863 152.88 37 159.832 37c11.003 0 19.103 23.76 31.388 59.737a780 780 0 0 0 30.779 80.798c-12.824-11.948-23.759-24.84-36.247-24.503c-11.61.27-24.502 14.04-38.61 31.725c-11.205 14.175-26.055 23.895-31.86 23.693c0 0-14.985-42.39-27.54-49.275a17.82 17.82 0 0 0-16.132 1.35L33 133.12z"></svg:path><svg:path fill="url(#skillIconsMatlabLight0)" d="M153.151 41.861c-4.522 6.075-9.99 17.213-19.845 29.565c-15.322 19.035-23.625 17.753-28.147 20.115a132.8 132.8 0 0 0-18.36 19.913l22.275 16.267c18.9-25.785 29.025-53.73 36.922-71.82a92 92 0 0 1 7.155-14.04"></svg:path><svg:path fill="url(#skillIconsMatlabLight1)" d="M159.9 37c-14.715 0-24.772 77.49-79.11 120.757c15.255-2.497 28.485 35.37 34.56 50.693c27-4.59 48.6-56.228 70.403-55.418c12.487.473 23.422 12.555 36.247 24.503C192.705 115.975 179.003 37 159.9 37"></svg:path><svg:defs><svg:lineargradient id="skillIconsMatlabLight0" x1="132.921" x2="120.839" y1="118.467" y2="79.452" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#512"></svg:stop><svg:stop offset=".23" stop-color="#523"></svg:stop><svg:stop offset=".36" stop-color="#534"></svg:stop><svg:stop offset=".51" stop-color="#645"></svg:stop><svg:stop offset=".66" stop-color="#568"></svg:stop><svg:stop offset=".84" stop-color="#29D"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsMatlabLight1" x1="220.043" x2="98.543" y1="142.86" y2="113.025" gradientUnits="userSpaceOnUse"><svg:stop offset=".081" stop-color="#C33"></svg:stop><svg:stop offset=".189" stop-color="#DE5239"></svg:stop><svg:stop offset=".313" stop-color="#F06E3E"></svg:stop><svg:stop offset=".421" stop-color="#FA8042"></svg:stop><svg:stop offset=".5" stop-color="#FE8643"></svg:stop><svg:stop offset=".58" stop-color="#FA7F42"></svg:stop><svg:stop offset=".696" stop-color="#EF6C3E"></svg:stop><svg:stop offset=".833" stop-color="#DC4C37"></svg:stop><svg:stop offset=".916" stop-color="#CF3633"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class SkillIconsMatlabLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
