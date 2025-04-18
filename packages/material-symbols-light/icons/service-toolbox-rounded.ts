import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightServiceToolboxRoundedIcon],svg[material-symbols-light-service-toolbox-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19q-.402 0-.701-.299T3 18v-4.308h4.5v.5q0 .214.143.357t.357.143q.208 0 .322-.16t.178-.34v-.5h7v.5q0 .214.143.357t.357.143q.208 0 .322-.16t.178-.34v-.5H21V18q0 .402-.299.701T20 19zm-.825-6.308l2.248-5.108q.11-.28.35-.432T6.3 7h1.892V5.846q0-.402.3-.7q.299-.3.7-.3h5.616q.402 0 .7.3q.3.298.3.7V7H17.7q.287 0 .527.152t.35.433l2.248 5.107H16.5v-.5q0-.213-.143-.356T16 11.692q-.208 0-.322.161q-.114.16-.178.34v.5h-7v-.5q0-.214-.143-.357T8 11.692q-.208 0-.322.161q-.114.16-.178.34v.5zM9.192 7h5.616V5.846H9.192z"></svg:path>`,
})
export class MaterialSymbolsLightServiceToolboxRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
