import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestCamWallMountIcon],svg[material-symbols-light-nest-cam-wall-mount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.093 16.296q-.668 0-1.14-.474q-.472-.475-.472-1.142V8.215q0-.667.475-1.139q.476-.472 1.144-.472t1.14.475t.472 1.146q.702-1.26 1.966-2.017Q9.942 5.45 11.5 5.45q1.103 0 2.11.42t1.779 1.192l3.877 3.877q.242.243.363.538q.121.294.121.598t-.121.598t-.364.539l-5.484 5.504q-.222.22-.515.339t-.616.12t-.628-.12q-.304-.12-.528-.34L7.611 14.84q-.275-.276-.497-.56t-.403-.604v1.006q0 .666-.475 1.14q-.476.475-1.143.475"></svg:path>`,
})
export class MaterialSymbolsLightNestCamWallMountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
