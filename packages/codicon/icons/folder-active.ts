import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFolderActiveIcon],svg[codicon-folder-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.71 3h6.79l.51.5v4.507A5 5 0 0 0 14 7.416V5.99H7.69l-.86.86l-.35.15H1.99v6H7.1q.106.523.316 1H1.51l-.5-.5v-11l.5-.5h5l.35.15zm-.22 2h6.5l.01-.99H7.5l-.36-.15l-.85-.85H2v3h4.28l.86-.86z"></svg:path><svg:path d="M9.778 8.674a4 4 0 1 1 4.444 6.652a4 4 0 0 1-4.444-6.652m2.13 4.99l2.387-3.182l-.8-.6l-2.077 2.769l-1.301-1.041l-.625.78l1.704 1.364l.713-.09z"></svg:path></svg:g>`,
})
export class CodiconFolderActiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
