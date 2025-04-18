import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPolymerIcon],svg[logos-polymer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FF4081" d="M153.6 177.98L51.193.605H102.4L204.807 177.98z"></svg:path><svg:path fill="#FFF" fill-opacity=".2" d="m153.6 177.98l25.6-44.344l25.607 44.344z"></svg:path><svg:path fill="#FFF" fill-opacity=".1" d="m128 133.636l25.6 44.344l25.6-44.344z"></svg:path><svg:path fill="#000" fill-opacity=".1" d="m102.4 89.292l25.6 44.344l25.6-44.344z"></svg:path><svg:path fill="#000" fill-opacity=".2" d="M102.4 89.292L128 44.948l25.6 44.344z"></svg:path><svg:path fill="#000" fill-opacity=".3" d="m76.8 44.948l25.6 44.344L128 44.948z"></svg:path><svg:path fill="#000" fill-opacity=".4" d="M76.8 44.948L102.4.605L128 44.948z"></svg:path><svg:path fill="#000" fill-opacity=".5" d="M51.193.605L76.8 44.948L102.4.605z"></svg:path><svg:path fill="#536DFE" d="M51.194 177.98L-.013 89.292L25.593 44.95L102.4 177.98H51.193"></svg:path><svg:path fill="#FFF" fill-opacity=".2" d="M51.194 177.98L76.8 133.636l25.6 44.344z"></svg:path><svg:path fill="#FFF" fill-opacity=".1" d="m25.593 133.636l25.6 44.344L76.8 133.636z"></svg:path><svg:path d="m25.593 133.636l25.6-44.344L76.8 133.636z"></svg:path><svg:path fill="#000" fill-opacity=".1" d="m-.013 89.292l25.606 44.344l25.6-44.344z"></svg:path><svg:path fill="#000" fill-opacity=".2" d="M-.013 89.292L25.593 44.95l25.6 44.343z"></svg:path><svg:path fill="#303F9F" d="m51.193 89.292l-25.6-44.344L51.193.605L76.8 44.948z"></svg:path><svg:path fill="#000" fill-opacity=".2" d="M76.8 44.948L51.193.605l-25.6 44.343z"></svg:path><svg:path fill="#3F51B5" d="m204.806 177.98l-25.607-44.344l25.607-44.343l25.6 44.343z"></svg:path><svg:path fill="#000" fill-opacity=".2" d="m230.406 133.636l-25.6 44.344l-25.607-44.344z"></svg:path><svg:path fill="#7986CB" d="M230.407 133.636L153.6.605h51.207l51.207 88.687z"></svg:path><svg:path fill="#FFF" fill-opacity=".2" d="m204.806 89.292l25.6 44.344l25.607-44.344z"></svg:path><svg:path fill="#FFF" fill-opacity=".1" d="m204.806 89.292l25.6-44.344l25.607 44.344z"></svg:path><svg:path fill="#000" fill-opacity=".1" d="M179.2 44.948L204.806.605l25.6 44.343z"></svg:path><svg:path fill="#000" fill-opacity=".2" d="m153.6.605l25.6 44.343L204.808.605z"></svg:path></svg:g>`,
})
export class LogosPolymerIcon {
  readonly viewBox = input("0 0 256 178")
  readonly width = input("1.44em")
  readonly height = input("1em")
}
