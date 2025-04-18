import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFireworksRocketSolidIcon],svg[streamline-fireworks-rocket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.334 1.472a.8.8 0 0 1-.18-.277a.57.57 0 0 1-.029-.298a.42.42 0 0 1 .117-.244a.42.42 0 0 1 .244-.117l4.602-.429a.6.6 0 0 1 .277.043a.77.77 0 0 1 .426.425a.6.6 0 0 1 .043.278l-.417 4.614a.42.42 0 0 1-.117.244a.42.42 0 0 1-.244.117a.56.56 0 0 1-.29-.026a.8.8 0 0 1-.273-.17zM7.279 8.585l-.17.172a1.375 1.375 0 0 0-.004 1.935l.428.434a.625.625 0 1 1-.89.878l-.428-.434a2.62 2.62 0 0 1-.73-2.217l-4.191 4.19a.625.625 0 1 1-.884-.883l5.472-5.472l-1.341-1.34a.5.5 0 0 1 .05-.752l3.18-2.419l3.504 3.504l-2.418 3.18a.5.5 0 0 1-.751.05zm2.303 1.55a.625.625 0 0 1 .884 0l.451.452a.625.625 0 0 1-.884.884l-.45-.451a.625.625 0 0 1 0-.884Zm2.8 0a.625.625 0 1 1 .885.885l-.452.45a.625.625 0 0 1-.884-.883l.452-.451Zm-2.8 3.409c.244.244.64.244.884 0l.451-.452a.625.625 0 0 0-.884-.883l-.45.45a.625.625 0 0 0 0 .885Zm2.8 0a.625.625 0 1 0 .885-.884l-.452-.451a.625.625 0 1 0-.884.883l.452.452Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFireworksRocketSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
