import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashContentShareLightIcon],svg[stash-content-share-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.411 7.46c-.164-.905.878-1.533 1.602-.965l5.463 4.293a1 1 0 0 1 0 1.572l-5.463 4.293c-.724.568-1.766-.06-1.602-.966l.27-1.48c-2.154-.426-3.655-.063-4.704.558c-1.134.673-1.802 1.687-2.18 2.502l-.452-.209l.452.21c-.185.4-.609.476-.861.45c-.249-.028-.686-.203-.73-.69c-.333-3.713.716-5.99 2.587-7.202c1.637-1.06 3.79-1.222 5.868-.993zm6.447 4.114l-5.463-4.292l.372 2.046a.5.5 0 0 1-.566.584c-2.208-.333-4.359-.221-5.865.754c-1.365.884-2.324 2.564-2.176 5.654c.462-.823 1.188-1.751 2.307-2.415c1.38-.818 3.295-1.196 5.908-.569a.5.5 0 0 1 .376.576l-.356 1.954z" clip-rule="evenodd"></svg:path>`,
})
export class StashContentShareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
