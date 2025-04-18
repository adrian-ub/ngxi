import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faCubeIcon],svg[fa-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m896 1501l640-349V516L896 749zm-64-865l698-254l-698-254l-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16L67 1264q-31-17-49-47t-18-65V384q0-40 23-73t61-47L788 8q22-8 44-8t44 8l704 256q38 14 61 47t23 73"></svg:path>`,
})
export class FaCubeIcon {
  readonly viewBox = input("0 0 1664 1664")
  readonly width = input("1em")
  readonly height = input("1em")
}
