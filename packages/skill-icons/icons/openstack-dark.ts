import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsOpenstackDarkIcon],svg[skill-icons-openstack-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#ED1844" fill-rule="evenodd" d="M200.682 40H54.67C45.5 40 38 47.501 38 56.67v39.204h40.44v-6.421c0-4.986 4.043-9.014 9.013-9.014h80.415c4.985 0 9.014 4.044 9.014 9.014v6.42h40.439V56.67c0-9.168-7.501-16.669-16.67-16.669zM177.53 166.102c0 4.985-4.044 9.014-9.014 9.014H88.101c-4.985 0-9.014-4.044-9.014-9.014v-6.421H38.648v39.204c0 9.169 7.502 16.67 16.67 16.67H201.33c9.168 0 16.669-7.501 16.669-16.67v-39.204H177.56zM38.617 107.604v40.439h40.13v-40.439zm138.913 0v40.439h40.131v-40.439z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SkillIconsOpenstackDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
