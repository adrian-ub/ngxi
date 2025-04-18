import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMetabaseIcon],svg[logos-metabase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#509EE3"><svg:ellipse cx="19.394" cy="82.757" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="19.394" cy="137.928" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="73.697" cy="82.757" opacity=".2" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="73.697" cy="138.464" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="128" cy="82.757" opacity=".2" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="128" cy="19.704" opacity=".2" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="128" cy="138.464" opacity=".2" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="182.303" cy="82.757" opacity=".2" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="236.606" cy="82.757" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="182.303" cy="138.464" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="236.606" cy="138.464" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="19.394" cy="193.099" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="73.697" cy="193.635" opacity=".2" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="128" cy="193.635" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="182.303" cy="193.635" opacity=".2" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="236.606" cy="193.635" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="19.394" cy="248.27" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="73.697" cy="248.806" opacity=".2" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="128" cy="248.806" opacity=".2" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="128" cy="303.977" opacity=".2" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="182.303" cy="248.806" opacity=".2" rx="19.394" ry="19.704"></svg:ellipse><svg:ellipse cx="236.606" cy="248.806" rx="19.394" ry="19.704"></svg:ellipse></svg:g>`,
})
export class LogosMetabaseIcon {
  readonly viewBox = input("0 0 256 324")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
