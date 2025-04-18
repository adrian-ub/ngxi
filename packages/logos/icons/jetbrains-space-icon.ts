import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosJetbrainsSpaceIconIcon],svg[logos-jetbrains-space-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosJetbrainsSpaceIcon0" x1="45.082%" x2="55.522%" y1="-1.343%" y2="97.61%"><svg:stop offset="0%" stop-color="#FCF84A"></svg:stop><svg:stop offset="32%" stop-color="#ABE682"></svg:stop><svg:stop offset="79%" stop-color="#36CDD2"></svg:stop><svg:stop offset="100%" stop-color="#07C3F2"></svg:stop></svg:lineargradient><svg:lineargradient id="logosJetbrainsSpaceIcon1" x1="-2.942%" x2="100.445%" y1="38.992%" y2="62.105%"><svg:stop offset="0%" stop-color="#3BEA62"></svg:stop><svg:stop offset="100%" stop-color="#087CFA"></svg:stop></svg:lineargradient><svg:lineargradient id="logosJetbrainsSpaceIcon2" x1="-3.308%" x2="111.745%" y1="71.807%" y2="15.462%"><svg:stop offset="0%" stop-color="#009AE5"></svg:stop><svg:stop offset="18%" stop-color="#0490DD"></svg:stop><svg:stop offset="49%" stop-color="#1073C6"></svg:stop><svg:stop offset="89%" stop-color="#2346A1"></svg:stop><svg:stop offset="100%" stop-color="#293896"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosJetbrainsSpaceIcon0)" d="M46.36 255.991c91.075-7.978 170.982-63.92 209.64-146.768C208.12 40.799 129.873.033 46.36 0Q35.2 0 23.936.99c-38.612 82.903-30.064 180.109 22.424 255"></svg:path><svg:path fill="url(#logosJetbrainsSpaceIcon1)" d="M24.209 1.024a301.4 301.4 0 0 1 134.685 108.199H256C208.263 40.76 130.062-.03 46.6 0Q35.437 0 24.208 1.024"></svg:path><svg:path fill="url(#logosJetbrainsSpaceIcon2)" d="M158.894 109.223C147.187 186.6 46.258 255.99 46.258 255.99c91.781-8.67 172.23-63.622 209.742-146.768z"></svg:path>`,
})
export class LogosJetbrainsSpaceIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
