import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSpoutingOrcaIcon],svg[openmoji-spouting-orca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f3f3f" d="M30.488 54.618c.403 1.032 1.154 4.169.564 4.587a.25.25 0 0 1-.136.047c-.191.01-.471-.167-.863-.599c-2.06-1.533-4.999.511-6.987-.653c-.8-.468-1.202-1.224-1.492-1.791c-.461.74-1.075 2.268-2.123 2.622c-1.836.551-4.59.375-5.897 3.842c-1.192-3.637-2.383-6.231 2.06-9.292c1.56-1.057 3.973-2.954 4.04-4.425C19.636 46.874 19.867 32.422 31 25c0 0 24-15 33 9c0 0 2 4-16 4c0 0-2 5-9 5c0 0-2 0 1-5c0 0-12.846 1.325-16.145 11.34c-1.063 4.072 5.532 2.457 6.634 5.278z"></svg:path><svg:path fill="#fff" d="M52.984 33.612c-1.018-.046-2.23.05-3.799.414C45 35 46 35.001 46 35.001l2.986 2.986c9.955-.089 13.402-1.45 14.53-2.563L63 35.001s-3.5-.168-5.75-.584c-1.406-.26-2.568-.729-4.265-.805z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m40 16l-3-9m6.571 9.947s-.892-8.198 1.808-5.808m-7.111 7.457s-5.201-6.399-5.4-2.799"></svg:path><svg:circle cx="47" cy="13" r="1"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M63 35s-3.5-.167-5.75-.583c-2.25-.417-3.879-1.364-8.064-.39C45 35 46 35 46 35l3 3"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30.488 54.618c.403 1.032 1.154 4.169.564 4.587v0a.25.25 0 0 1-.136.047c-.191.01-.471-.167-.863-.599c-2.06-1.533-4.999.511-6.987-.653c-.8-.468-1.202-1.224-1.492-1.791c-.461.74-1.075 2.268-2.123 2.622c-1.836.551-4.59.375-5.897 3.842c-1.192-3.637-2.383-6.231 2.06-9.292c1.56-1.057 3.973-2.954 4.04-4.425C19.636 46.874 19.867 32.422 31 25c0 0 24-15 33 9c0 0 2 4-16 4c0 0-2 5-9 5c0 0-2 0 1-5c0 0-12.846 1.325-16.145 11.34c-1.063 4.072 5.532 2.457 6.634 5.278z"></svg:path>`,
})
export class OpenmojiSpoutingOrcaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
