import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAddStarburst16Icon],svg[fluent-color-add-starburst-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAddStarburst160)" d="M8.402.213a.5.5 0 0 0-.792 0L6.317 1.889a.5.5 0 0 1-.537.174l-2.03-.595a.5.5 0 0 0-.64.465l-.062 2.116a.5.5 0 0 1-.331.456l-1.994.712a.5.5 0 0 0-.244.753l1.194 1.748a.5.5 0 0 1 0 .564L.478 10.03a.5.5 0 0 0 .244.753l1.994.712a.5.5 0 0 1 .331.456l.062 2.116a.5.5 0 0 0 .64.465l2.031-.595a.5.5 0 0 1 .537.175l1.293 1.675a.5.5 0 0 0 .792 0l1.293-1.676a.5.5 0 0 1 .537-.174l2.03.595a.5.5 0 0 0 .641-.465l.062-2.116a.5.5 0 0 1 .331-.456l1.994-.712a.5.5 0 0 0 .244-.753L14.34 8.282a.5.5 0 0 1 0-.564l1.194-1.748a.5.5 0 0 0-.245-.753l-1.993-.712a.5.5 0 0 1-.331-.456l-.062-2.116a.5.5 0 0 0-.64-.465l-2.031.595a.5.5 0 0 1-.537-.174z"></svg:path><svg:path fill="url(#fluentColorAddStarburst161)" fill-opacity=".95" d="M8.5 5a.5.5 0 0 0-1 0v2.5H5a.5.5 0 0 0 0 1h2.5V11a.5.5 0 0 0 1 0V8.5H11a.5.5 0 0 0 0-1H8.5z"></svg:path><svg:defs><svg:radialgradient id="fluentColorAddStarburst160" cx="0" cy="0" r="1" gradientTransform="matrix(-16.57345 -30.71471 28.69314 -15.48262 17.862 18.308)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC470"></svg:stop><svg:stop offset=".251" stop-color="#FF835C"></svg:stop><svg:stop offset=".55" stop-color="#F24A9D"></svg:stop><svg:stop offset=".814" stop-color="#B339F0"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorAddStarburst161" x1="11.014" x2="3.669" y1="13.476" y2="8.719" gradientUnits="userSpaceOnUse"><svg:stop offset=".024" stop-color="#FFC8D7"></svg:stop><svg:stop offset=".807" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAddStarburst16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
