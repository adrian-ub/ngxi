import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEyeSolidIcon],svg[mynaui-eye-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 12a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M1.943 10.153C3.458 8.074 6.918 4.25 12 4.25s8.542 3.824 10.057 5.903l.023.031c.258.355.468.643.598 1.142c.055.212.072.464.072.674s-.017.462-.072.674c-.13.5-.34.787-.598 1.142l-.023.031C20.542 15.926 17.082 19.75 12 19.75s-8.542-3.824-10.057-5.903l-.023-.031c-.258-.355-.468-.643-.598-1.142A2.8 2.8 0 0 1 1.25 12c0-.21.017-.462.072-.674c.13-.5.34-.787.598-1.142zM9.25 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path></svg:g>`,
})
export class MynauiEyeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
