import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsLightningBoltIcon],svg[meteocons-lightning-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsLightningBolt0" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsLightningBolt1" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="96" height="176" href="#meteoconsLightningBolt0" transform="translate(190.13 132.72)scale(1.36)"></svg:use>`,
})
export class MeteoconsLightningBoltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
