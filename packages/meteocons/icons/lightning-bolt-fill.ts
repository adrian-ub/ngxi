import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsLightningBoltFillIcon],svg[meteocons-lightning-bolt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsLightningBoltFill0" x1="8.7" x2="80.9" y1="17.1" y2="142.1" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f7b23b"></svg:stop><svg:stop offset=".5" stop-color="#f7b23b"></svg:stop><svg:stop offset="1" stop-color="#f59e0b"></svg:stop></svg:lineargradient><svg:symbol id="meteoconsLightningBoltFill1" viewBox="0 0 102.7 186.8"><svg:path fill="url(#meteoconsLightningBoltFill0)" stroke="#f6a823" stroke-miterlimit="10" stroke-width="4" d="m34.8 2l-32 96h32l-16 80l80-112h-48l32-64h-48z"><svg:animate id="meteoconsLightningBoltFill2" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="102.7" height="186.7" href="#meteoconsLightningBoltFill1" transform="translate(186.37 130)scale(1.36)"></svg:use>`,
})
export class MeteoconsLightningBoltFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
