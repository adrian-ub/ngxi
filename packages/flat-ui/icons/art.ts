import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiArtIcon],svg[flat-ui-art-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#17A085" d="M50 0c27.613 0 50 22.386 50 50s-22.387 50-50 50C22.386 100 0 77.614 0 50S22.386 0 50 0"></svg:path><svg:defs><svg:circle id="flatUiArt0" cx="50" cy="50" r="50"></svg:circle></svg:defs><svg:clippath id="flatUiArt1"><svg:use href="#flatUiArt0"></svg:use></svg:clippath><svg:g clip-path="url(#flatUiArt1)"><svg:path fill="#107864" d="m17 34l-33 33v51h31l21-21V43z"></svg:path><svg:path fill="#EBEDEE" d="M76 31.051V31H26v.051c-.33-.028-.662-.051-1-.051c-6.627 0-12 5.373-12 12c0 6.628 5.373 12 12 12c2.45 0 4.725-.738 6.621-2H32l-4 4v49h44V57l-4-4h.379c1.896 1.262 4.171 2 6.621 2c6.628 0 12-5.372 12-12c0-6.289-4.841-11.44-11-11.949"></svg:path><svg:path fill="#D3D5D6" d="M26 31v.051c-.33-.028-.662-.051-1-.051c-6.627 0-12 5.373-12 12c0 6.628 5.373 12 12 12a11 11 0 0 0 1.519-.104l.016-.002a12 12 0 0 0 1.466-.289v.006A12 12 0 0 0 31.622 53H32l-4 4v49h22V31z"></svg:path><svg:path fill="#BDC3C7" d="M76 36H23c-2.891.861-5 3.83-5 7a7 7 0 1 0 14 0c0-1.075-.25-2.09-.683-3h37.365A7 7 0 0 0 68 43a7 7 0 1 0 14 0c0-3.524-2.609-6.513-6-7M25 46a3 3 0 1 1 0-6a3 3 0 0 1 0 6m50 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path><svg:circle cx="41" cy="51" r="2" fill="#AAAFB3"></svg:circle><svg:circle cx="50" cy="51" r="2" fill="#BDC3C7"></svg:circle><svg:circle cx="59" cy="51" r="2" fill="#BDC3C7"></svg:circle><svg:path fill="#AAAFB3" d="M18 43a7 7 0 1 0 14 0c0-1.075-.25-2.09-.683-3H50v-4H23c-2.891.861-5 3.83-5 7m10 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m20 8a2 2 0 0 0 2 2v-4a2 2 0 0 0-2 2m-2 13v41c0 .348.059.68.142 1H50V60a4 4 0 0 0-4 4"></svg:path><svg:path fill="#BDC3C7" d="M53.857 106a4 4 0 0 0 .143-1V64a4 4 0 0 0-8 0v41c0 .348.059.68.142 1zm13 0a4 4 0 0 0 .143-1V64a4 4 0 0 0-8 0v41c0 .348.059.68.143 1z"></svg:path><svg:path fill="#AAAFB3" d="M40.858 106c.083-.32.142-.652.142-1V64a4 4 0 0 0-8 0v41c0 .348.059.68.142 1z"></svg:path></svg:g>`,
})
export class FlatUiArtIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
