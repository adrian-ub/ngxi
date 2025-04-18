import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestCamWallMountSharpIcon],svg[material-symbols-light-nest-cam-wall-mount-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.093 16.296q-.668 0-1.14-.474q-.472-.475-.472-1.142V8.215q0-.667.475-1.139q.476-.472 1.144-.472t1.14.475t.472 1.146q.702-1.26 1.966-2.017Q9.942 5.45 11.5 5.45q1.103 0 2.11.42t1.779 1.192l5.013 5.013l-7.752 7.79l-5.039-5.026q-.275-.276-.497-.56t-.403-.604v1.006q0 .666-.475 1.14q-.476.475-1.143.475"></svg:path>`,
})
export class MaterialSymbolsLightNestCamWallMountSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
