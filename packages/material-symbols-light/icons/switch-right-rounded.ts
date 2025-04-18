import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchRightRoundedIcon],svg[material-symbols-light-switch-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.808 16.35q-.304 0-.556-.22T14 15.537V8.464q0-.373.252-.594t.556-.22q.142 0 .288.056t.277.186l3.543 3.543q.13.13.183.267t.053.298t-.053.298t-.183.268l-3.543 3.542q-.13.13-.277.186q-.146.056-.288.056m.076-.994L18.242 12l-3.356-3.356zm-5.692.994q-.142 0-.288-.056q-.146-.055-.277-.186l-3.543-3.542q-.13-.131-.183-.268q-.053-.136-.053-.298t.053-.298t.183-.267l3.543-3.543q.13-.13.277-.186q.146-.056.288-.056q.304 0 .556.22t.252.594v7.073q0 .373-.252.593t-.556.22"></svg:path>`,
})
export class MaterialSymbolsLightSwitchRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
