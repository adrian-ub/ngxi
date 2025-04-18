import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderBlockIcon],svg[hugeicons-folder-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.975 20.475a3.5 3.5 0 1 0-4.95-4.95m4.95 4.95a3.5 3.5 0 1 1-4.95-4.95m4.95 4.95l-4.95-4.95M12 20.5H9.136c-1.752 0-3.648.06-5.07-.963c-.92-.66-1.465-1.664-1.838-3.318C2.046 15.414 2 14.586 2 13.76V6.93c0-.952.022-1.93.401-2.802C2.848 3.1 3.561 2.674 5 2.5h3.139c.865 0 1.704.362 2.224 1.053c.692.918 1.111 1.721 1.637 2.947m10 6v-2.104c0-.924-.086-1.885-.596-2.656c-.602-.91-1.42-1.205-2.904-1.24H12m-5 0h5" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
